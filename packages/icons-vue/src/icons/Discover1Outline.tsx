// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Discover1OutlineSvg from '@ant-design/icons-svg/lib/asn/Discover1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Discover1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Discover1Outline: Discover1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Discover1OutlineSvg}></AntdIcon>;
};

Discover1Outline.displayName = 'Discover1Outline';
Discover1Outline.inheritAttrs = false;
export default Discover1Outline;