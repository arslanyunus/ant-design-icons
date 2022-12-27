// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forbidden2OutlineSvg from '@ant-design/icons-svg/lib/asn/Forbidden2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forbidden2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forbidden2Outline: Forbidden2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forbidden2OutlineSvg}></AntdIcon>;
};

Forbidden2Outline.displayName = 'Forbidden2Outline';
Forbidden2Outline.inheritAttrs = false;
export default Forbidden2Outline;