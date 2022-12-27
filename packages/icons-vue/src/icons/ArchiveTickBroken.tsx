// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickBrokenSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickBroken: ArchiveTickBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickBrokenSvg}></AntdIcon>;
};

ArchiveTickBroken.displayName = 'ArchiveTickBroken';
ArchiveTickBroken.inheritAttrs = false;
export default ArchiveTickBroken;