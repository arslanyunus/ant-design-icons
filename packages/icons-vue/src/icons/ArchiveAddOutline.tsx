// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveAddOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveAddOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveAddOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveAddOutline: ArchiveAddOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveAddOutlineSvg}></AntdIcon>;
};

ArchiveAddOutline.displayName = 'ArchiveAddOutline';
ArchiveAddOutline.inheritAttrs = false;
export default ArchiveAddOutline;