// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddBrokenSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddBroken: ArchiveAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddBrokenSvg}></AntdIcon>;
};

ArchiveAddBroken.displayName = 'ArchiveAddBroken';
ArchiveAddBroken.inheritAttrs = false;
export default ArchiveAddBroken;