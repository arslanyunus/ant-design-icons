// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveRemoveTwoTone: SaveRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveRemoveTwoToneSvg}></AntdIcon>;
};

SaveRemoveTwoTone.displayName = 'SaveRemoveTwoTone';
SaveRemoveTwoTone.inheritAttrs = false;
export default SaveRemoveTwoTone;