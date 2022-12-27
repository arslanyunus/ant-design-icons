// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ArchiveBookOutlineSvg from '@ant-design/icons-svg/lib/asn/ArchiveBookOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ArchiveBookOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ArchiveBookOutline: ArchiveBookOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ArchiveBookOutlineSvg}></AntdIcon>;
};

ArchiveBookOutline.displayName = 'ArchiveBookOutline';
ArchiveBookOutline.inheritAttrs = false;
export default ArchiveBookOutline;