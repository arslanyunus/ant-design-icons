// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphBrokenSvg from '@ant-design/icons-svg/lib/asn/GraphBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphBroken: GraphBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphBrokenSvg}></AntdIcon>;
};

GraphBroken.displayName = 'GraphBroken';
GraphBroken.inheritAttrs = false;
export default GraphBroken;