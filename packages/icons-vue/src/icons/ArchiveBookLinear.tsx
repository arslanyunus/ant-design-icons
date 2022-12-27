// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookLinearSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookLinear: ArchiveBookLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookLinearSvg}></AntdIcon>;
};

ArchiveBookLinear.displayName = 'ArchiveBookLinear';
ArchiveBookLinear.inheritAttrs = false;
export default ArchiveBookLinear;