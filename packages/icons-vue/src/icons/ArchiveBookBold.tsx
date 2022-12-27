// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookBold: ArchiveBookBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookBoldSvg}></AntdIcon>;
};

ArchiveBookBold.displayName = 'ArchiveBookBold';
ArchiveBookBold.inheritAttrs = false;
export default ArchiveBookBold;