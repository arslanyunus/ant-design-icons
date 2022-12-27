// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MainComponentOutlineSvg from '@ant-design/icons-svg/lib/asn/MainComponentOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MainComponentOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MainComponentOutline: MainComponentOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MainComponentOutlineSvg}></AntdIcon>;
};

MainComponentOutline.displayName = 'MainComponentOutline';
MainComponentOutline.inheritAttrs = false;
export default MainComponentOutline;