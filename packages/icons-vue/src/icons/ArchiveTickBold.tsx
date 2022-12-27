// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveTickBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveTickBold: ArchiveTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveTickBoldSvg}></AntdIcon>;
};

ArchiveTickBold.displayName = 'ArchiveTickBold';
ArchiveTickBold.inheritAttrs = false;
export default ArchiveTickBold;