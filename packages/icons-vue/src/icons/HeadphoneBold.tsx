// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneBoldSvg from '@ant-design/icons-svg/lib/asn/HeadphoneBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneBold: HeadphoneBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneBoldSvg}></AntdIcon>;
};

HeadphoneBold.displayName = 'HeadphoneBold';
HeadphoneBold.inheritAttrs = false;
export default HeadphoneBold;