// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AquariusTwoToneSvg from '@ant-design/icons-svg/lib/asn/AquariusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AquariusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AquariusTwoTone: AquariusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AquariusTwoToneSvg}></AntdIcon>;
};

AquariusTwoTone.displayName = 'AquariusTwoTone';
AquariusTwoTone.inheritAttrs = false;
export default AquariusTwoTone;