// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphOutlineSvg from '@ant-design/icons-svg/lib/asn/GraphOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphOutline: GraphOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphOutlineSvg}></AntdIcon>;
};

GraphOutline.displayName = 'GraphOutline';
GraphOutline.inheritAttrs = false;
export default GraphOutline;