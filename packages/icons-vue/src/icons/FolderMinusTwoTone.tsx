// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import FolderMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface FolderMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const FolderMinusTwoTone: FolderMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMinusTwoToneSvg}></AntdIcon>;
};

FolderMinusTwoTone.displayName = 'FolderMinusTwoTone';
FolderMinusTwoTone.inheritAttrs = false;
export default FolderMinusTwoTone;