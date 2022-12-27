// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ChromeOutlineSvg from '@ant-design/icons-svg/lib/asn/ChromeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ChromeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ChromeOutline: ChromeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ChromeOutlineSvg}></AntdIcon>;
};

ChromeOutline.displayName = 'ChromeOutline';
ChromeOutline.inheritAttrs = false;
export default ChromeOutline;