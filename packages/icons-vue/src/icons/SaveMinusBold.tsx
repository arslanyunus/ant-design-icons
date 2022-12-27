// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusBoldSvg from '@ant-design/icons-svg/lib/asn/SaveMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusBold: SaveMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusBoldSvg}></AntdIcon>;
};

SaveMinusBold.displayName = 'SaveMinusBold';
SaveMinusBold.inheritAttrs = false;
export default SaveMinusBold;