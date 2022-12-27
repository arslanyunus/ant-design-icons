// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Sun1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Sun1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Sun1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Sun1TwoTone: Sun1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Sun1TwoToneSvg}></AntdIcon>;
};

Sun1TwoTone.displayName = 'Sun1TwoTone';
Sun1TwoTone.inheritAttrs = false;
export default Sun1TwoTone;