// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphLinearSvg from '@ant-design/icons-svg/lib/asn/GraphLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphLinear: GraphLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphLinearSvg}></AntdIcon>;
};

GraphLinear.displayName = 'GraphLinear';
GraphLinear.inheritAttrs = false;
export default GraphLinear;