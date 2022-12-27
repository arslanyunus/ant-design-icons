// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Convert3DCubeBoldSvg from '@ant-design/icons-svg/lib/asn/Convert3DCubeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Convert3DCubeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Convert3DCubeBold: Convert3DCubeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Convert3DCubeBoldSvg}></AntdIcon>;
};

Convert3DCubeBold.displayName = 'Convert3DCubeBold';
Convert3DCubeBold.inheritAttrs = false;
export default Convert3DCubeBold;