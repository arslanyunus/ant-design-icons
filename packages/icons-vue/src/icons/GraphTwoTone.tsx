// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GraphTwoToneSvg from '@ant-design/icons-svg/lib/asn/GraphTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GraphTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GraphTwoTone: GraphTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GraphTwoToneSvg}></AntdIcon>;
};

GraphTwoTone.displayName = 'GraphTwoTone';
GraphTwoTone.inheritAttrs = false;
export default GraphTwoTone;