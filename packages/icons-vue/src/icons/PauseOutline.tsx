// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseOutlineSvg from '@ant-design/icons-svg/lib/asn/PauseOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseOutline: PauseOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseOutlineSvg}></AntdIcon>;
};

PauseOutline.displayName = 'PauseOutline';
PauseOutline.inheritAttrs = false;
export default PauseOutline;