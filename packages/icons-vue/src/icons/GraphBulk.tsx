// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphBulkSvg from '@ant-design/icons-svg/lib/asn/GraphBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphBulk: GraphBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphBulkSvg}></AntdIcon>;
};

GraphBulk.displayName = 'GraphBulk';
GraphBulk.inheritAttrs = false;
export default GraphBulk;