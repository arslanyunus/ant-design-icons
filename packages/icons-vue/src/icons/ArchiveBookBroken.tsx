// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookBrokenSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookBroken: ArchiveBookBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookBrokenSvg}></AntdIcon>;
};

ArchiveBookBroken.displayName = 'ArchiveBookBroken';
ArchiveBookBroken.inheritAttrs = false;
export default ArchiveBookBroken;