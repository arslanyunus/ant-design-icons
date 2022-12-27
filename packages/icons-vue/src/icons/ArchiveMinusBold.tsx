// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveMinusBoldSvg from '@ant-design/icons-svg/lib/asn/ArchiveMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveMinusBold: ArchiveMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveMinusBoldSvg}></AntdIcon>;
};

ArchiveMinusBold.displayName = 'ArchiveMinusBold';
ArchiveMinusBold.inheritAttrs = false;
export default ArchiveMinusBold;