// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveOutline: ArchiveOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveOutlineSvg}></AntdIcon>;
};

ArchiveOutline.displayName = 'ArchiveOutline';
ArchiveOutline.inheritAttrs = false;
export default ArchiveOutline;