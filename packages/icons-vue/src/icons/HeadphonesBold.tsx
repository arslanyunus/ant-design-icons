// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import HeadphonesBoldSvg from '@ant-design/icons-svg/lib/asn/HeadphonesBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface HeadphonesBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const HeadphonesBold: HeadphonesBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={HeadphonesBoldSvg}></AntdIcon>;
};

HeadphonesBold.displayName = 'HeadphonesBold';
HeadphonesBold.inheritAttrs = false;
export default HeadphonesBold;