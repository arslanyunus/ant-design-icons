// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeadphonesTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesTwoTone: HeadphonesTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesTwoToneSvg}></AntdIcon>;
};

HeadphonesTwoTone.displayName = 'HeadphonesTwoTone';
HeadphonesTwoTone.inheritAttrs = false;
export default HeadphonesTwoTone;