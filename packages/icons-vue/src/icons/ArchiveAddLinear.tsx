// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddLinear: ArchiveAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddLinearSvg}></AntdIcon>;
};

ArchiveAddLinear.displayName = 'ArchiveAddLinear';
ArchiveAddLinear.inheritAttrs = false;
export default ArchiveAddLinear;