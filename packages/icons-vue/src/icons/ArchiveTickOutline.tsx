// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickOutline: ArchiveTickOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickOutlineSvg}></AntdIcon>;
};

ArchiveTickOutline.displayName = 'ArchiveTickOutline';
ArchiveTickOutline.inheritAttrs = false;
export default ArchiveTickOutline;