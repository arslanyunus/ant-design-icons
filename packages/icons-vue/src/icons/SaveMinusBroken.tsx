// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SaveMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/SaveMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SaveMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SaveMinusBroken: SaveMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SaveMinusBrokenSvg}></AntdIcon>;
};

SaveMinusBroken.displayName = 'SaveMinusBroken';
SaveMinusBroken.inheritAttrs = false;
export default SaveMinusBroken;