// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/HeadphoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneTwoTone: HeadphoneTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneTwoToneSvg}></AntdIcon>;
};

HeadphoneTwoTone.displayName = 'HeadphoneTwoTone';
HeadphoneTwoTone.inheritAttrs = false;
export default HeadphoneTwoTone;