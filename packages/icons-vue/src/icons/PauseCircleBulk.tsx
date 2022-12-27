// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PauseCircleBulkSvg from '@ant-design/icons-svg/lib/asn/PauseCircleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PauseCircleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PauseCircleBulk: PauseCircleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PauseCircleBulkSvg}></AntdIcon>;
};

PauseCircleBulk.displayName = 'PauseCircleBulk';
PauseCircleBulk.inheritAttrs = false;
export default PauseCircleBulk;