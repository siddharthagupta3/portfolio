'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3-force';
import * as SiIcons from 'react-icons/si';

const techNodes = [
  { id: 'center', image: '/assets/Image/siddhartha.jpg', color: '#ff6200', radius: 100, isCenter: true },
  { id: 'openai', icon: SiIcons.SiOpenai || 'AI', color: '#ffffff', radius: 35 },
  { id: 'react', icon: SiIcons.SiReact || 'React', color: '#61DAFB', radius: 25 },
  { id: 'js', icon: SiIcons.SiJavascript || 'JS', color: '#F7DF1E', radius: 25 },
  { id: 'ts', icon: SiIcons.SiTypescript || 'TS', color: '#3178C6', radius: 25 },
  { id: 'node', icon: SiIcons.SiNodedotjs || SiIcons.SiNodejs || 'Node', color: '#339933', radius: 25 },
  { id: 'python', icon: SiIcons.SiPython || 'Py', color: '#3776AB', radius: 25 },
  { id: 'aws', icon: SiIcons.SiAmazonaws || SiIcons.SiAmazonwebservices || 'AWS', color: '#FF9900', radius: 30 },
  { id: 'docker', icon: SiIcons.SiDocker || 'Docker', color: '#2496ED', radius: 25 },
  { id: 'k8s', icon: SiIcons.SiKubernetes || 'K8s', color: '#326CE5', radius: 25 },
  { id: 'github', icon: SiIcons.SiGithub || 'Git', color: '#ffffff', radius: 30 },
  { id: 'figma', icon: SiIcons.SiFigma || 'Figma', color: '#F24E1E', radius: 25 },
  { id: 'graphql', icon: SiIcons.SiGraphql || 'GQL', color: '#E10098', radius: 25 },
  { id: 'postgres', icon: SiIcons.SiPostgresql || 'PG', color: '#4169E1', radius: 25 },
  { id: 'mongo', icon: SiIcons.SiMongodb || 'Mongo', color: '#47A248', radius: 25 },
  { id: 'redis', icon: SiIcons.SiRedis || 'Redis', color: '#DC382D', radius: 25 },
  { id: 'vercel', icon: SiIcons.SiVercel || 'Vercel', color: '#ffffff', radius: 25 },
  { id: 'tailwind', icon: SiIcons.SiTailwindcss || 'TW', color: '#06B6D4', radius: 25 },
  { id: 'framer', icon: SiIcons.SiFramer || 'Framer', color: '#0055FF', radius: 25 },
  { id: 'wordpress', icon: SiIcons.SiWordpress || 'WP', color: '#21759B', radius: 30 },
  { id: 'shopify', icon: SiIcons.SiShopify || 'Shopify', color: '#7AB55C', radius: 25 },
  { id: 'salesforce', icon: SiIcons.SiSalesforce || 'SF', color: '#00A1E0', radius: 25 },
  { id: 'flutter', icon: SiIcons.SiFlutter || 'Flutter', color: '#02569B', radius: 25 },
  { id: 'angular', icon: SiIcons.SiAngular || 'Angular', color: '#DD0031', radius: 25 },
  { id: 'vue', icon: SiIcons.SiVuedotjs || SiIcons.SiVuejs || SiIcons.SiVue || 'Vue', color: '#4FC08D', radius: 25 },
  { id: 'gcp', icon: SiIcons.SiGooglecloud || 'GCP', color: '#4285F4', radius: 25 },
  { id: 'git', icon: SiIcons.SiGit || 'Git', color: '#F05032', radius: 25 },
  { id: 'firebase', icon: SiIcons.SiFirebase || 'FB', color: '#FFCA28', radius: 25 },
  { id: 'svelte', icon: SiIcons.SiSvelte || 'Svelte', color: '#FF3E00', radius: 25 },
  { id: 'nestjs', icon: SiIcons.SiNestjs || 'Nest', color: '#E0234E', radius: 25 },
  { id: 'express', icon: SiIcons.SiExpress || 'Express', color: '#ffffff', radius: 25 },
];

const links = [
  ['center', 'openai'],
  ['center', 'react'],
  ['center', 'aws'],
  ['center', 'github'],
  ['center', 'node'],
  ['center', 'figma'],
  ['center', 'postgres'],
  ['center', 'ts'],

  ['react', 'ts'],
  ['react', 'js'],
  ['react', 'tailwind'],
  ['react', 'framer'],

  ['ts', 'js'],
  ['ts', 'node'],

  ['node', 'express'],
  ['node', 'nestjs'],
  ['node', 'mongo'],
  ['node', 'postgres'],

  ['aws', 'docker'],
  ['aws', 'k8s'],
  ['aws', 'gcp'],
  ['aws', 'firebase'],

  ['docker', 'k8s'],

  ['github', 'git'],
  ['github', 'vercel'],

  ['figma', 'framer'],

  ['postgres', 'redis'],
  ['postgres', 'graphql'],

  ['graphql', 'mongo'],

  ['python', 'postgres'],
  ['python', 'openai'],

  ['openai', 'salesforce'],
  ['openai', 'ts'],

  ['vue', 'js'],
  ['angular', 'js'],

  ['wordpress', 'shopify'],
  ['wordpress', 'github'],

  ['flutter', 'firebase'],
  ['svelte', 'js'],
].map(([source, target]) => ({ source, target }));

const StackHeading = () => (
  <div className="flex items-center gap-4 text-gray-400 tracking-[0.2em] text-xs md:text-sm font-light select-none whitespace-nowrap">
    <div className="w-8 h-px bg-gray-600 shrink-0" />
    <span>
      OUR STACK <span className="text-[#ff6200] font-bold">•</span> 30+ TOOLS
    </span>
  </div>
);

export default function Hero() {
  const containerRef = useRef(null);
  const [navigateX, setNavigateX] = useState(null);
  const nodeRefs = useRef({});
  const linkRefs = useRef({});
  const simulationRef = useRef(null);

  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  const [hoveredNode, setHoveredNode] = useState(null);

  // Responsive dimensions
  useEffect(() => {
    if (!containerRef.current) return;

    const updateDimensions = () => {
      const rect = containerRef.current.getBoundingClientRect();
      setDimensions({
        width: rect.width,
        height: rect.height,
      });
    };

    updateDimensions();

    const observer = new ResizeObserver(updateDimensions);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  // Compute horizontal center of the "Navigate" button so heading can align under it (desktop)
  useEffect(() => {
    const updateNavigatePosition = () => {
      const btn = document.getElementById('navigate-btn');
      const container = containerRef.current;
      if (!btn || !container) return;
      const btnRect = btn.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const centerX = btnRect.left + btnRect.width / 2 - containerRect.left;
      setNavigateX(Math.round(centerX));
    };

    updateNavigatePosition();
    window.addEventListener('resize', updateNavigatePosition);
    // Also update on scroll in case header height/layout changes
    window.addEventListener('scroll', updateNavigatePosition);

    return () => {
      window.removeEventListener('resize', updateNavigatePosition);
      window.removeEventListener('scroll', updateNavigatePosition);
    };
  }, [containerRef]);

  // D3 force simulation
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const isMobile = dimensions.width < 768;
    const centerRadius = isMobile ? 65 : 100;
    const scale = isMobile ? 0.65 : 1;

    const nodes = techNodes.map((node, index) => {
      const radius = node.isCenter ? centerRadius : node.radius * scale;
      const angle = (index / techNodes.length) * Math.PI * 2;
      const spawnRadius = node.isCenter ? 0 : (isMobile ? 120 : 250);
      
      return {
        ...node,
        radius,
        x: dimensions.width / 2 + Math.cos(angle) * spawnRadius,
        y: dimensions.height / 2 + Math.sin(angle) * spawnRadius,
      };
    });

    const simLinks = links.map((link) => ({ ...link }));

    const simulation = d3
      .forceSimulation(nodes)
      .force(
        'link',
        d3
          .forceLink(simLinks)
          .id((d) => d.id)
          .distance(isMobile ? 60 : 120)
          .strength(0.7)
      )
      .force('charge', d3.forceManyBody().strength(isMobile ? -100 : -350))
      .force(
        'center',
        d3.forceCenter(dimensions.width / 2, dimensions.height / 2)
      )
      .force(
        'collision',
        d3.forceCollide().radius((d) => d.radius + (isMobile ? 8 : 16))
      )
      .alphaDecay(0.025);

    // Keep center node fixed
    const centerNode = nodes.find((node) => node.isCenter);

    if (centerNode) {
      centerNode.fx = dimensions.width / 2;
      centerNode.fy = dimensions.height / 2;
    }

    simulation.on('tick', () => {
      nodes.forEach((node) => {
        const radius = node.radius;

        node.x = Math.max(
          radius,
          Math.min(dimensions.width - radius, node.x)
        );

        node.y = Math.max(
          radius,
          Math.min(dimensions.height - radius, node.y)
        );

        const element = nodeRefs.current[node.id];

        if (element) {
          element.style.transform = `translate3d(${node.x - radius}px, ${node.y - radius}px, 0)`;
        }
      });

      simLinks.forEach((link) => {
        const source = link.source;
        const target = link.target;

        const key = `${source.id}-${target.id}`;
        const reverseKey = `${target.id}-${source.id}`;

        const element = linkRefs.current[key] || linkRefs.current[reverseKey];

        if (element) {
          element.setAttribute('x1', source.x);
          element.setAttribute('y1', source.y);
          element.setAttribute('x2', target.x);
          element.setAttribute('y2', target.y);
        }
      });
    });

    simulationRef.current = simulation;

    return () => {
      simulation.stop();
      simulationRef.current = null;
    };
  }, [dimensions]);

  // Drag start
  const handlePointerDown = (event, id) => {
    if (!simulationRef.current) return;

    const simulation = simulationRef.current;
    const node = simulation.nodes().find((item) => item.id === id);

    if (!node) return;

    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch (err) {
      // Ignore errors if pointer capture fails (e.g. fast clicks)
    }

    simulation.alphaTarget(0.3).restart();

    node.fx = node.x;
    node.fy = node.y;
    node.isDragging = true;
  };

  // Drag move
  const handlePointerMove = (event, id) => {
    if (!simulationRef.current || !containerRef.current) return;

    const simulation = simulationRef.current;
    const node = simulation.nodes().find((item) => item.id === id);

    if (!node || !node.isDragging) return;

    const rect = containerRef.current.getBoundingClientRect();

    node.fx = event.clientX - rect.left;
    node.fy = event.clientY - rect.top;
  };

  // Drag end
  const handlePointerUp = (event, id) => {
    if (!simulationRef.current) return;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch (err) {
      // Ignore
    }

    const simulation = simulationRef.current;

    simulation.alphaTarget(0);

    const node = simulation.nodes().find((item) => item.id === id);

    if (!node) return;

    if (!node.isCenter) {
      node.fx = null;
      node.fy = null;
    }

    node.isDragging = false;
  };

  // Check whether link belongs to hovered node
  const isConnected = (link) => {
    if (!hoveredNode) return false;

    return (
      link.source === hoveredNode ||
      link.target === hoveredNode ||
      link.source.id === hoveredNode ||
      link.target.id === hoveredNode
    );
  };

  return (
    <section
      id="hero"
      className="relative bg-black text-white overflow-x-hidden flex flex-col items-center pt-[calc(var(--header-height,4.5rem)+0.75rem)] pb-3 max-md:pb-4 md:pt-[calc(var(--header-height,5rem)+1rem)] md:pb-10"
    >
      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Mobile: centered below navbar */}
      <div className="md:hidden container w-full flex justify-center px-12 mb-3 relative z-20 shrink-0">
        <StackHeading />
      </div>

      {/* Desktop: position StackHeading under the Navigate button (calculates horizontal center) */}
      <div className="hidden md:block absolute left-0 right-0 z-20 pointer-events-none" style={{ top: 'calc(var(--header-height,5rem) + 0.5rem)' }}>
        <div style={{ position: 'relative', width: '100%', height: 0 }}>
          <div
            style={{
              position: 'absolute',
              left: navigateX !== null ? `${navigateX}px` : '50%',
              transform: 'translateX(-50%)',
              pointerEvents: 'auto',
            }}
          >
            <div className="flex flex-col items-center" style={{ marginTop: '0.25rem' }}>
              <StackHeading />
            </div>
          </div>
        </div>
      </div>

      {/* Graph */}
      <div
        ref={containerRef}
        className="w-full max-w-full relative z-10 shrink-0 max-md:h-[calc(100dvh-var(--header-height,4.5rem)-8rem)] max-md:min-h-[380px] md:min-h-[640px]"
      >
        {/* Connections */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
          {links.map((link, index) => {
            const connected = isConnected(link);

            return (
              <line
                key={`${link.source}-${link.target}-${index}`}
                ref={(element) => {
                  if (element) {
                    linkRefs.current[`${link.source}-${link.target}`] = element;
                  }
                }}
                stroke={connected ? '#ff6200' : 'rgba(255,98,0,0.25)'}
                strokeWidth={connected ? 2 : 1}
                opacity={connected ? 1 : 0.75}
                style={{
                  transition: 'stroke 180ms ease, stroke-width 180ms ease, opacity 180ms ease',
                }}
              />
            );
          })}
        </svg>

        {/* Technology nodes */}
        {techNodes.map((node) => {
          const Icon = node.icon;
          const isHovered = hoveredNode === node.id;
          const isMobile = dimensions.width > 0 && dimensions.width < 768;
          const currentRadius = node.isCenter ? (isMobile ? 65 : 100) : node.radius * (isMobile ? 0.65 : 1);

          return (
            <div
              key={node.id}
              ref={(element) => {
                if (element) {
                  nodeRefs.current[node.id] = element;
                }
              }}
              className="absolute top-0 left-0 flex items-center justify-center rounded-full bg-[#111111] cursor-grab active:cursor-grabbing select-none will-change-transform overflow-hidden touch-none"
              style={{
                width: currentRadius * 2,
                height: currentRadius * 2,
                border: `1px solid ${
                  node.isCenter ? '#ff6200' : isHovered ? node.color : 'rgba(255,255,255,0.12)'
                }`,
                boxShadow: node.isCenter
                  ? '0 0 35px rgba(255,98,0,0.35)'
                  : isHovered
                  ? `0 0 25px ${node.color}70`
                  : 'inset 0 0 12px rgba(0,0,0,0.7)',
                zIndex: node.isCenter || isHovered ? 20 : 1,
                transformOrigin: 'center',
                transition: 'border 180ms ease, box-shadow 180ms ease, scale 180ms ease',
                scale: isHovered ? 1.15 : 1,
              }}
              onPointerDown={(event) => handlePointerDown(event, node.id)}
              onPointerMove={(event) => handlePointerMove(event, node.id)}
              onPointerUp={(event) => handlePointerUp(event, node.id)}
              onPointerCancel={(event) => handlePointerUp(event, node.id)}
              onPointerEnter={() => setHoveredNode(node.id)}
              onPointerLeave={() => setHoveredNode(null)}
            >
              {node.isCenter && node.image ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={node.image}
                  alt="Siddhartha"
                  className="w-full h-full object-cover rounded-full pointer-events-none"
                  draggable={false}
                />
              ) : typeof Icon === 'string' ? (
                <span className="text-lg md:text-2xl font-bold text-white">
                  {Icon}
                </span>
              ) : Icon ? (
                <Icon size={currentRadius * 1.05} color={node.color} />
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="relative z-20 flex items-center justify-center gap-4 text-gray-500 tracking-[0.2em] text-[10px] md:text-xs select-none mt-4 max-md:mt-5 max-md:mb-2 max-md:w-full max-md:px-4 md:mt-6 md:mb-0 shrink-0 whitespace-nowrap">
        DRAG <span className="text-[#ff6200]">•</span> HOVER TO EXPLORE
      </div>
    </section>
  );
}