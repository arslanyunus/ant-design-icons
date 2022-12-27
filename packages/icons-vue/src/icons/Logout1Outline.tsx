// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Logout1OutlineSvg from '@ant-design/icons-svg/lib/asn/Logout1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Logout1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Logout1Outline: Logout1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Logout1OutlineSvg}></AntdIcon>;
};

Logout1Outline.displayName = 'Logout1Outline';
Logout1Outline.inheritAttrs = false;
export default Logout1Outline;