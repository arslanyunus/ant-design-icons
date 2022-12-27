// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Convert3DCubeBulkSvg from '@ant-design/icons-svg/lib/asn/Convert3DCubeBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Convert3DCubeBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Convert3DCubeBulk: Convert3DCubeBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Convert3DCubeBulkSvg}></AntdIcon>;
};

Convert3DCubeBulk.displayName = 'Convert3DCubeBulk';
Convert3DCubeBulk.inheritAttrs = false;
export default Convert3DCubeBulk;