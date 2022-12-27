// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphBoldSvg from '@ant-design/icons-svg/lib/asn/GraphBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphBold: GraphBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphBoldSvg}></AntdIcon>;
};

GraphBold.displayName = 'GraphBold';
GraphBold.inheritAttrs = false;
export default GraphBold;