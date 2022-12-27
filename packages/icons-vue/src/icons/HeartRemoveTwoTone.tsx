// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeartRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeartRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeartRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeartRemoveTwoTone: HeartRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeartRemoveTwoToneSvg}></AntdIcon>;
};

HeartRemoveTwoTone.displayName = 'HeartRemoveTwoTone';
HeartRemoveTwoTone.inheritAttrs = false;
export default HeartRemoveTwoTone;