// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Convert3DCubeOutlineSvg from '@ant-design/icons-svg/lib/asn/Convert3DCubeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Convert3DCubeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Convert3DCubeOutline: Convert3DCubeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Convert3DCubeOutlineSvg}></AntdIcon>;
};

Convert3DCubeOutline.displayName = 'Convert3DCubeOutline';
Convert3DCubeOutline.inheritAttrs = false;
export default Convert3DCubeOutline;