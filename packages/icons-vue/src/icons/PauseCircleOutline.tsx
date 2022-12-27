// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/PauseCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleOutline: PauseCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleOutlineSvg}></AntdIcon>;
};

PauseCircleOutline.displayName = 'PauseCircleOutline';
PauseCircleOutline.inheritAttrs = false;
export default PauseCircleOutline;