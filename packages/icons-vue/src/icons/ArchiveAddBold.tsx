// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddBold: ArchiveAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddBoldSvg}></AntdIcon>;
};

ArchiveAddBold.displayName = 'ArchiveAddBold';
ArchiveAddBold.inheritAttrs = false;
export default ArchiveAddBold;