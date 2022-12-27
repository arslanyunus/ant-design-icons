// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BarcodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/BarcodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BarcodeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BarcodeTwoTone: BarcodeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BarcodeTwoToneSvg}></AntdIcon>;
};

BarcodeTwoTone.displayName = 'BarcodeTwoTone';
BarcodeTwoTone.inheritAttrs = false;
export default BarcodeTwoTone;