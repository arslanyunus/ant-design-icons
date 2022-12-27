// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphoneOutlineSvg from '@ant-design/icons-svg/lib/asn/HeadphoneOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphoneOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphoneOutline: HeadphoneOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphoneOutlineSvg}></AntdIcon>;
};

HeadphoneOutline.displayName = 'HeadphoneOutline';
HeadphoneOutline.inheritAttrs = false;
export default HeadphoneOutline;