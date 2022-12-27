// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveMinusOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveMinusOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveMinusOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveMinusOutline: ArchiveMinusOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveMinusOutlineSvg}></AntdIcon>;
};

ArchiveMinusOutline.displayName = 'ArchiveMinusOutline';
ArchiveMinusOutline.inheritAttrs = false;
export default ArchiveMinusOutline;