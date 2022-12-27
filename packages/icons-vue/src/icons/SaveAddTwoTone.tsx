// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveAddTwoTone: SaveAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveAddTwoToneSvg}></AntdIcon>;
};

SaveAddTwoTone.displayName = 'SaveAddTwoTone';
SaveAddTwoTone.inheritAttrs = false;
export default SaveAddTwoTone;