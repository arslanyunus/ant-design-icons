// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1OutlineSvg from '@ant-design/icons-svg/lib/asn/Glass1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1Outline: Glass1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1OutlineSvg}></AntdIcon>;
};

Glass1Outline.displayName = 'Glass1Outline';
Glass1Outline.inheritAttrs = false;
export default Glass1Outline;