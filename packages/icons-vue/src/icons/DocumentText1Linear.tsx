// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DocumentText1LinearSvg from '@ant-design/icons-svg/lib/asn/DocumentText1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DocumentText1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DocumentText1Linear: DocumentText1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DocumentText1LinearSvg}></AntdIcon>;
};

DocumentText1Linear.displayName = 'DocumentText1Linear';
DocumentText1Linear.inheritAttrs = false;
export default DocumentText1Linear;