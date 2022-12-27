// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesOutlineSvg from '@ant-design/icons-svg/lib/asn/HeadphonesOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesOutline: HeadphonesOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesOutlineSvg}></AntdIcon>;
};

HeadphonesOutline.displayName = 'HeadphonesOutline';
HeadphonesOutline.inheritAttrs = false;
export default HeadphonesOutline;