// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/SaveMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusTwoTone: SaveMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusTwoToneSvg}></AntdIcon>;
};

SaveMinusTwoTone.displayName = 'SaveMinusTwoTone';
SaveMinusTwoTone.inheritAttrs = false;
export default SaveMinusTwoTone;