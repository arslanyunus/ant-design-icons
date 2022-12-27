// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1OutlineSvg from '@ant-design/icons-svg/lib/asn/Simcard1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1Outline: Simcard1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1OutlineSvg}></AntdIcon>;
};

Simcard1Outline.displayName = 'Simcard1Outline';
Simcard1Outline.inheritAttrs = false;
export default Simcard1Outline;