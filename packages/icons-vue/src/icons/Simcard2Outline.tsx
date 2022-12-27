// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard2OutlineSvg from '@ant-design/icons-svg/lib/asn/Simcard2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard2Outline: Simcard2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard2OutlineSvg}></AntdIcon>;
};

Simcard2Outline.displayName = 'Simcard2Outline';
Simcard2Outline.inheritAttrs = false;
export default Simcard2Outline;