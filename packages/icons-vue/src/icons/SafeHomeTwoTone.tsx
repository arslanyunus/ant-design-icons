// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SafeHomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/SafeHomeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SafeHomeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SafeHomeTwoTone: SafeHomeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SafeHomeTwoToneSvg}></AntdIcon>;
};

SafeHomeTwoTone.displayName = 'SafeHomeTwoTone';
SafeHomeTwoTone.inheritAttrs = false;
export default SafeHomeTwoTone;